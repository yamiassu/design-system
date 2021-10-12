// Packages
import { useCallback, useContext, useEffect, useState } from "preact/hooks"

// Utils
import { dig } from "../../utils/object"
import { filters, validates } from "../../utils/form"

// Component
import Props from "./props"

// Contexts
import FormContext from "../../contexts/form"
import GroupContext from "../../contexts/group"

export default function useField (props: Props) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// contexts
	const { form, updateForm, updateErrors, errors } = useContext(FormContext)
	const context = useContext(GroupContext)

	// constants
	const position = context ? (context + "." + props.name):props.name

	// states
	const [value, setValue] = useState(dig(form || {}, position || ""))

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	// On boot
	useEffect(() => {
		const val = dig(form, position)

		if (val !== undefined && val !== value) setValue(val)
	}, [form])

	useEffect(() => {
		// Compare values
		if (dig(form, position) == value) return

		// Set it in the context
		const updatedvalue = filters(value, props.filters)

		// Check if validations passes
		const validation = validates(updatedvalue, props.validates)
		if (validation) updateErrors(validation, position)

		// Update values
		updateForm(updatedvalue, position)
	}, [value])

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onChangeField = useCallback((newvalue: any) => {
		// Get raw value
		let localvalue = filters(newvalue?.target?.value !== undefined ? newvalue?.target?.value : newvalue, props.filters)

		// Check if the user wants to edit it
		if (props.onChange) localvalue = props.onChange(localvalue)

		// Update values
		updateForm(localvalue, position)
	}, [form, props.onChange, updateErrors, updateForm])

	// -------------------------------------------------
	// Response
	// -------------------------------------------------

	return [value, onChangeField, { error: errors?.[position] }] as const
}
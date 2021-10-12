// Packages
import { h } from "preact"
import { useState, useEffect, useCallback } from "preact/hooks"

// Helpers
import { compare, dig, omit } from "../../utils/object"

// Contexts
import FormContext from "../../contexts/form"

// Interfaces
import Props from "./props"

/** Required parent of any other form component */
export default function Form(props: Props) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [form, setForm] = useState({ data: props.initialData || props.data || {} as any, internal: true })
	const [errors, seterrors] = useState<any>({})
	const [displayerrors, setdisplayerrors] = useState<any>({})

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		if (props.data && !compare(props.data, form)) setForm({ data: props.data, internal: false })
	}, [props.data])

	useEffect(() => {
		if (props.onChange && form.internal) props.onChange(form.data)
	}, [form, props.onChange])

	useEffect(() => {
		if (props.onError) props.onError(errors)
	}, [displayerrors, props.onError])

	useEffect(() => {
		if (props.validateOnChange) setdisplayerrors(errors)
	}, [errors, props.validateOnChange])

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onProcessSubmit = useCallback((event: any) => {
		// Prevent the page from reloading
		event.preventDefault()

		// Check if the parent wants to know
		if (!("onSubmit" in props)) return

		// Check if there is any error
		if (Object.keys(errors).length !== 0) {
			setdisplayerrors(errors)
			return
		}

		// Check if form is carrying a file
		let value: any
		if (props.file) {
			value = new FormData()

			for (const field in form.data) {
				if (form.data[field]) {
					value.append(field, form.data[field])
				}
			}
		}
		else {
			value = {}

			for (const field in form) {
				if (form.data[field]) {
					value[field] = form.data[field]
				}
			}
		}

		// Get value from the form
		value = props.onSubmit!(value)

		// Wait for promise response
		if (value instanceof Promise) {
			value.then(response => {
				if (response === false) setForm({ data: {}, internal: true })
			})
		}
		else if (value === false) setForm({ data: {}, internal: true })
	}, [form, props, errors])

	const updateForm = useCallback((value: any, position = "") => {

		setForm((form: any) => {
			// Set it in the context
			let updatedform = { ...form.data }
			updatedform = dig(updatedform, position, value)

			// Update values
			return { data: updatedform, internal: true }
		})
	}, [form])

	const updateErrors = useCallback((error: any, node: any) => {
		// Update values
		seterrors((errors: any) => {
			// Set it in the context
			const updatederrors = { ...errors }

			if (error !== undefined)
				updatederrors[node] = error
			else
				delete updatederrors[node]

			return updatederrors
		})
	}, [errors])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	// extract internal props
	const htmlprops = omit(props, ["file", "onChange", "onSubmit", "children", "data", "initialData", "onError"])

	return (
		<FormContext.Provider
			value={{ form: form.data, updateErrors, updateForm, errors: displayerrors }}
			children={<form {...htmlprops} encType={(props.file ? "multipart/form-data" : undefined)} onSubmit={onProcessSubmit}>{props.children}</form>}
		/>
	)
}

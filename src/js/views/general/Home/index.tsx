// Packages
import { h } from "preact"
import { Grid, Title } from "@lib"
import { useState } from "preact/hooks"
import { Form, Input, Select } from "@lib/form"

export default function Home() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const [form, setform] = useState({})

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Grid container>
			<Title>Yamiassu's design system</Title>

			<Form data={form} onChange={setform}>
				<Input name="hi" />
				<Select name="what">
					<option value="1">Test</option>
					<option value="2">Test 2</option>
				</Select>
			</Form>

			<button onClick={() => setform({ ...form, hi: "what" })}>Test</button>

			<pre>{JSON.stringify(form, null, 4)}</pre>
		</Grid>
	)
}
import formValidator from "$lib/formValidator";
import { test, expect } from "vitest";

test("Test Form Validator Function", () => {
	// Check if form validator returns no error when provided with correct values
	expect(formValidator({ name: "Robert", age: 10 })).toStrictEqual({});

	// Check if form validator is a valid type
	expect(formValidator({ name: "", age: 0 })).toBeTypeOf("object");
});

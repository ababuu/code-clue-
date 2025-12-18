"use server";

export async function explain(prevState, formData) {
  const codeSnippet = formData.get("code");
  const language = formData.get("language");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/explain-code`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ codeSnippet, language }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.error || "Failed to fetch explanation from server.",
      };
    }

    return {
      success: true,
      body: response.body,
    };
  } catch (error) {
    return {
      success: false,
      error: ` An error occurred: ${error.message} `,
    };
  }
}

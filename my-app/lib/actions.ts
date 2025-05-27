'use server';
export async function createPost(formData: FormData) {
  const title = formData.get('title');
  console.log('🚀 ~ createPost ~ title:', title);
  const content = formData.get('content');
  console.log('🚀 ~ createPost ~ content:', content);
}

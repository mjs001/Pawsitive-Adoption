export default function RetrieveFormDataLocal() {
  const formData = localStorage.getItem('formData');
  if (formData !== null) {
    return JSON.parse(formData);
  } else {
    return null;
  }
}

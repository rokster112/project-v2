export function HandleChange(e, setFormData) {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
}

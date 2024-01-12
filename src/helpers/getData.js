export default async function getPages() {
  try {
    const res = await fetch("/pages.json")
    const data = await res.json()
    return data
  } catch (e) {
    console.log(e)
  }
}

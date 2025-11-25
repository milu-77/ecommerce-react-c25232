const BASE_URL = "https://692162e6512fb4140be012e5.mockapi.io/categories";

export const getcategories = async () => {
  let url = BASE_URL
   
   const res = await fetch(url)
  if (!res.ok){
    throw new Error("Error al listar productos")
  }

  const results = await res.json()
  return results
}
import GoBack from "@/components/dragon-ball/GoBack"
import Header from "@/components/dragon-ball/Header"

const notFound = () => {
  return (
    <>
    <Header />
      <h1 className="text-3xl font-bold mt-10 text-center">
        Not Found
      </h1>
      <p className="text-center mb-10">The character you are looking for does not exist</p>
      <GoBack />
    </>
  )
}

export default notFound
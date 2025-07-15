import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    <Button title="Small Rounded-sm" styles="text-sm rounded-sm bg-blue-500 text-white" />
      <Button title="Small Rounded-md" styles="text-sm rounded-md bg-green-500 text-white" />
      <Button title="Small Rounded-full" styles="text-sm rounded-full bg-purple-500 text-white" />

      {/* Medium Buttons */}
      <Button title="Medium Rounded-sm" styles="text-base rounded-sm bg-blue-600 text-white" />
      <Button title="Medium Rounded-md" styles="text-base rounded-md bg-green-600 text-white" />
      <Button title="Medium Rounded-full" styles="text-base rounded-full bg-purple-600 text-white" />
     <Button title="Large Rounded-sm" styles="text-lg px-6 py-3 rounded-sm bg-blue-700 text-white" />
      <Button title="Large Rounded-md" styles="text-lg px-6 py-3 rounded-md bg-green-700 text-white" />
      <Button title="Large Rounded-lg" styles="text-lg px-6 py-3 rounded-lg bg-purple-700 text-white" />


    </div>
  )
}
export default Landing
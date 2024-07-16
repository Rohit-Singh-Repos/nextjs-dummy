import Link from "next/link";

export default function Home() {
  return (
    <> 
      <h1>NextJS API Routes</h1>
      <Link href="/showProducts" children="Show Products"/> <br />
      <Link href="/addProducts" children="Add Products"/> <br />
      <Link href="/uploadImage" children="Upload Image"/> <br />
    </>
  );
}
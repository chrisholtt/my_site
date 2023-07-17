import Link from 'next/link'
import App from './components/App'


async function serverTest() {
    const req = await fetch(`http:/localhost:3000/api/hello`);
    const res = await req.json();
    console.log("hey from server")
}

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const getText = await serverTest();

    return (


        <App />

    )
}
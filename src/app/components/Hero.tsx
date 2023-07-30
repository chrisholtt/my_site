import App from "./App"
export default function Hero() {

    return (
        <section style={{
            position: 'relative'
        }}>
            <div style={{
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                zIndex: -1,
                left: 100
            }}>
                <App />
            </div>
            <div className="text-8xl font-roboto text-primary text-center">
                Creative Developer
            </div>
            <div className="text-3xl font-roboto text-primary text-center">
                A creative software developer from Scotland.
            </div>
        </section>
    )
}
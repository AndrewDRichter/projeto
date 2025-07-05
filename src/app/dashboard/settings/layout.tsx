
export const metadata = {
    title: "Dashboard settings",
    description: "This is the demo dashboard settings"
}

export default function SettingsLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            <h3>Dashboard header</h3>
            {children}
        </>
    )
}
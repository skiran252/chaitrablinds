// Horizontal slat divider that looks like a set of blind slats
export default function SlatDivider() {
    return (
        <div className="slat-divider py-2" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="slat" />
            ))}
        </div>
    )
}

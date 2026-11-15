export default function Clover({
    className,
    size = 24,
}: {
    className?: string;
    size?: number;
}) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            aria-hidden="true"
            focusable="false"
        >
            <use href="#clover" />
        </svg>
    );
}
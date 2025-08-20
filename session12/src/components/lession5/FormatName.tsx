export default function FormatName() {
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "Nam",
    }
    const formatName = (): string => {
        return `${user.firstName} ${user.lastName}`
    }
    return (
        <>
            <div>Họ và tên: {formatName()}</div>
        </>
    )
}

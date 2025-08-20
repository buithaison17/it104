export default function UserInfor() {
    const user = {
        fullName: "Bùi Thái Sơn",
        gender: "Name",
        birthday: "17/01/2006",
        email: "sonbui@gmail.com",
        address: "Hà Nội, Việt Nam",
    };
    const {fullName, gender, birthday, email, address} = user;
    return (
    <>
        <h2>Thông tin cá nhân</h2>
        <ul style={{textAlign: "left"}}>
            <li>Họ và tên: <strong>{fullName}</strong></li>
            <li>Giới tính: <strong>{gender}</strong></li>
            <li>Ngày sinh: <strong>{birthday}</strong></li>
            <li>Email: <strong>{email}</strong></li>
            <li>Địa chỉ: <strong>{address}</strong></li>
        </ul>
    </>
  )
}

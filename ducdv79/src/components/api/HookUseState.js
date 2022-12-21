import React, { useState } from "react";
import axios from "axios";

export default function ShowListUser(props) {
    const [listUser, setListUser] = useState([]);
    const [isLoading, setLoading] = useState(false);

    //API chứa dữ liệu người dùng
    const getUserAPI = "http://noithatlucmo.local/api/list-user";

    //Hàm fetch API để lấy dữ liệu ng. dùng
    const getUser = () => {
        //Cập nhật lại giá trị của state loading
        setLoading(true);

        //Thực hiện gọi api
        axios
            .get(getUserAPI)
            .then((res) => {
                //Cập nhật giá trị của state listUser
                setListUser(res.data);
            })
            .catch((err) => {
                //Trường hợp xảy ra lỗi
                alert("Không thể kết nối tới server");
            })
            .finally(() => {
                // Câu lệnh trong này được khởi chạy mỗi khi call API xong
                // bất kể thất bại hay không.
                // ...
                setLoading(false); //Cập nhật giá trị của state isLoading
            });
    };

    return (
        <>
            <code>cccccc</code> <br />
            {isLoading ? "loading..." : <button onClick={getUser}>Get User</button>}
            <ShowUser listUser={listUser} />
        </>
    );
}

const ShowUser = (props) => {
    //Lấy giá tri của props listUser
    const { listUser } = props;

    // Render ra list user
    // React.Fragment cho phép bọc JSX lại.
    // List Keys :  chỉ định key, giúp loại bỏ cảnh báo.
    return (
        <div>
            {listUser.map((user, index) => {
                return (
                    <React.Fragment key={user.id}>
                        <ul>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                            <li>{user.phone}</li>
                        </ul>
                        <hr />
                    </React.Fragment>
                );
            })}
        </div>
    );
};
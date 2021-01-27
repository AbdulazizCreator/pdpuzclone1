import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const UsersCom = () => {
  const options1 = [
    { value: "java", label: "java" },
    { value: "python", label: "python" },
    { value: "javascript", label: "Vanilla" },
  ];
  const options2 = [
    { value: "2-modul", label: "2-modul" },
    { value: "4-modul", label: "4-modul" },
    { value: "1-modul", label: "1-modul" },
  ];
  const options3 = [
    { value: "Classes", label: "Classes" },
    { value: "OOP", label: "OOP" },
    { value: "Funtions", label: "Functions" },
  ];
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const handleChangeKurs = (e) => {
    setSelectedOption1(e);
  };
  const handleChangeModul = (e) => {
    setSelectedOption2(e);
  };
  const handleChangeDars = (e) => {
    setSelectedOption3(e);
  };
  const openSortOpen = () => {
    setSortOpen(!sortOpen);
  };
  const sendUser = (name) => {
    setSelectedUser(name);
  };
  const changeModal = (name) => {
    setModalOpen(!modalOpen);
  };
  const [allChecked, setAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState("")
  const handleAllCheck = (e) => {
    setAllChecked(e.target.checked);
  };

  const handleSingleCheck = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    if (!loading) {
      setIsChecked((current) => {
        const nextIsChecked = {};
        Object.keys(current).forEach((key) => {
          nextIsChecked[key] = allChecked;
        });
        return nextIsChecked;
      });
    }
  }, [allChecked, loading]);

  useEffect(() => {
    const initialIsChecked = users.reduce((acc, d) => {
      acc[d.name] = false;
      return acc;
    }, {});
    setIsChecked(initialIsChecked);
    setLoading(false);
  }, [users]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  return (
    <React.Fragment>
      <div id="usersCom">
        <div className="mentor">
          <p className="mb-0">Dilshod Mirsoatov</p>
          <div>
            <img src="images/mentor.svg" alt="" />
          </div>
          <div>
            <img src="images/about.svg" alt="" />
          </div>
        </div>
        <div className="titleMenu">
          <h3>Foydalanuvchilar</h3>
        </div>
        <div className="extraWorks">
          <div className="firstPart">
            <div className="search">
              <img src="images/search.svg" alt="" />
              <input type="search" placeholder="Search" />
              <button>
                <img src="images/sort.svg" alt="" onClick={openSortOpen} />
                <div
                  className="sortBox"
                  style={{ display: sortOpen ? "block" : "none" }}
                >
                  <Select
                    value={selectedOption1}
                    onChange={(e) => handleChangeKurs(e)}
                    options={options1}
                    placeholder={"Kursni tanlang"}
                  />
                  <Select
                    value={selectedOption2}
                    onChange={(e) => handleChangeModul(e)}
                    options={options2}
                    placeholder={"Modulni tanlang"}
                  />
                  <Select
                    value={selectedOption3}
                    onChange={(e) => handleChangeDars(e)}
                    options={options3}
                    placeholder={"Darsni tanlang"}
                  />
                  <form>
                    <div>
                      <input type="checkbox" />
                      <label className="mb-0" htmlFor="balansinc">
                        Balans bo’yicha(o’sish)
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label className="mb-0" htmlFor="balansinc">
                        Balans bo’yicha(kamayish)
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label className="mb-0" htmlFor="balansinc">
                        Foydalanuvchi (A-Z)
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label className="mb-0" htmlFor="balansinc">
                        Foydalanuvchi (Z-A)
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label className="mb-0" htmlFor="balansinc">
                        Sana bo’yicha (o’sish)
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label className="mb-0" htmlFor="balansinc">
                        Sana bo’yicha (kamayish)
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label className="mb-0" htmlFor="balansinc">
                        Telegram yo’qlar
                      </label>
                    </div>
                    <div style={{ marginBottom: "0px" }}>
                      <input type="checkbox" />
                      <label className="mb-0" htmlFor="balansinc">
                        Active talabalar
                      </label>
                    </div>
                  </form>
                </div>
              </button>
            </div>
            <div className="reload">
              <img src="images/reload.svg" alt="" />
            </div>
          </div>
          <div className="secondPart">
            <div className="cart">
              <img src="images/cart.svg" alt="" />
            </div>
            <div className="excel">
              <button type="submit">
                <img src="images/excel.svg" alt="" />
                <p className="mb-0">Export to excel</p>
              </button>
            </div>
            <div className="message">
              <button type="submit">
                <img src="images/message.svg" alt="" />
                <p className="mb-0">Xabar yuborish</p>
              </button>
            </div>
          </div>
        </div>
        <div className="tableDiv">
          <table>
            <thead>
              <tr style={{ borderBottom: "2px solid black" }}>
                <th style={{ padding: "0 0 0 30px" }}>
                  <label className="labelContainer p-relative">
                    <input
                      name="checkall"
                      type="checkbox"
                      checked={allChecked}
                      onChange={handleAllCheck}
                    />
                    <span className="checkmark"></span>
                  </label>
                </th>
                <th>Foydalanuvchi</th>
                <th>Telegram</th>
                <th style={{ textAlign: "center" }}>Kurslar</th>
                <th style={{ padding: "30px" }}>Joriy Balans</th>
                <th></th>
              </tr>
              <tr style={{ height: "30px" }}>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "0 0 0 30px" }}>
                    <label className="labelContainer p-relative">
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={isChecked[item.name]}
                        onChange={handleSingleCheck}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="images/men.jpg" alt="" />
                      <div className="nameTel d-flex flex-column justify-content-between">
                        <h5
                          style={{
                            marginTop: "0px",
                            fontWeight: "600",
                            fontSize: "18.0757px",
                          }}
                        >
                          {item.name}
                        </h5>
                        <p
                          className="mb-0"
                          style={{ fontSize: "14.79px", lineHeight: "13px" }}
                        >
                          +998934614188
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                  >
                    TgContact: NO <br /> TgGroup: 1
                  </td>
                  <td
                  >
                    2
                  </td>
                  <td style={{ padding: "30px" }}>
                    <h6>
                      1 000 000 UZS
                    </h6>
                    <p className="mb-0">Registration</p>
                  </td>
                  <td>
                    <div
                      onClick={() => {
                        sendUser(item.name);
                        changeModal();
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.00008 17.3333C4.39758 17.3333 0.666748 13.6025 0.666748 8.99996C0.666748 4.39746 4.39758 0.666626 9.00008 0.666626C13.6026 0.666626 17.3334 4.39746 17.3334 8.99996C17.3334 13.6025 13.6026 17.3333 9.00008 17.3333ZM9.00008 15.6666C10.7682 15.6666 12.4639 14.9642 13.7141 13.714C14.9644 12.4638 15.6667 10.7681 15.6667 8.99996C15.6667 7.23185 14.9644 5.53616 13.7141 4.28591C12.4639 3.03567 10.7682 2.33329 9.00008 2.33329C7.23197 2.33329 5.53628 3.03567 4.28604 4.28591C3.03579 5.53616 2.33341 7.23185 2.33341 8.99996C2.33341 10.7681 3.03579 12.4638 4.28604 13.714C5.53628 14.9642 7.23197 15.6666 9.00008 15.6666ZM8.16675 4.83329H9.83342V6.49996H8.16675V4.83329ZM8.16675 8.16663H9.83342V13.1666H8.16675V8.16663Z"
                          fill="#898989"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="newModal">
        <div
          className="coverPart"
          style={{ left: modalOpen ? "0" : "-100vw" }}
          onClick={() => setModalOpen(false)}
        ></div>
        <div className="modalPart" style={{ right: modalOpen ? "0" : "100vw" }}>
          <div className="modalContent">
            <div className="closeButton" onClick={() => setModalOpen(false)}>
              <img src="images/close.svg" alt="" />
            </div>
            <img src="images/men.jpg" alt="" />
            <div className="aboutPerson">
              <h4 className="mb-0">{selectedUser}</h4>
              <p className="mb-0">+998934614188</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UsersCom;

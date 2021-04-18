import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import "../css_folder/modal.css";

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {open, close, header} = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div
            className={open
                ? 'openModal modal'
                : 'modal'}>
            {
                open
                    ? (
                        <section>
                            <header>
                                {header}
                            </header>
                            <main>
                                {props.children}
                                <table>
                                    <tr>
                                        <td>
                                        <h3>해당 상품은 다수의 부품으로 이루어져있습니다.</h3>
                                        <h8>구매를 원하시면 상담 부탁드립니다.<br/></h8>
                                        <h8>3초후 자동으로 종료됩니다.</h8>
                                        </td>
                                    </tr>

                                </table>
                            </main>
                            <footer>
                            </footer>
                        </section>
                    )
                    : null
            }
        </div>
    )
}

export default Modal;
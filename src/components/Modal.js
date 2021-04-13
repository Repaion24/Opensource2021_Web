import React from 'react';
import "../css_folder/modal.css";

const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                        여기에 이제 장바구니 내역 쫙 뜨면 된다..
                        구매하실건가요?
                    </main>
                    <footer>
                        <button className="close" onClick={close}> 결제 </button>
                        {/* 여기 버튼으로 구매 기능연결하면 될듯... */}
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;
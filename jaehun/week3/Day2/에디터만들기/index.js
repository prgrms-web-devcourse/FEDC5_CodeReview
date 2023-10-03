// class로 하나씩 이벤트리스터 등록 (비효율적)
() => {
    // 글씨체 수정
    document.querySelector(".bold").addEventListener("click", () => {
        // 현재는 사용을 지양하고 있고 대부분의 에디터는 직접 만들지만 우리는 간단하게 만들꺼나깐 쓰자!
        document.execCommand("bold");
    });
    document.querySelector(".italic").addEventListener("click", () => {
        document.execCommand("italic");
    });

    // 텍스트 정렬
    document.querySelector(".align-left").addEventListener("click", () => {
        document.execCommand("justifyLeft");
    });
    document.querySelector(".align-center").addEventListener("click", () => {
        document.execCommand("justifyCenter");
    });
    document.querySelector(".align-right").addEventListener("click", () => {
        document.execCommand("justifyRight");
    });
};

// data-command를 이용한 이벤트리스너 등록 (효율적)
(() => {
    document.querySelectorAll(".toolbar button").forEach((element) => {
        element.addEventListener("click", (e) => {
            const command = e.target.getAttribute("data-command");
            document.execCommand(command);
        });
    });
})();

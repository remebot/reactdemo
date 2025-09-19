"use client"

export default function Button() {
    function handClick() {
        alert('你点击了我！');
    }
    return (
        <button onClick={handClick}>点我</button>
    );
}
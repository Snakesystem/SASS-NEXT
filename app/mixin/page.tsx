import React from 'react'

export default function page() {
  return (
    <div className="mixin-container">
        <div className="mixin-heading">
            <h1>Mixin Function</h1>
            <p>Mixin sama seperti function pada bahasa pemrograman, agar code bisa di gunakan secara berulang - lang tanpa menuliskan nya lagi</p>
            <ul>
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
                <li><a href="">Link 3</a></li>
                <li><a href="">Link 4</a></li>
                <li><a href="">Link 5</a></li>
            </ul>
        </div>
        <div className="mixin-main">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <div className="mixin-row">
                <div className="box">Box 1</div>
                <div className="box">Box 2</div>
                <div className="box">Box 3</div>
            </div>
        </div>
        <div className="mixin-footer">
            <ul>
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
                <li><a href="">Link 3</a></li>
                <li><a href="">Link 4</a></li>
                <li><a href="">Link 5</a></li>
            </ul>
        </div>
    </div>
  )
}

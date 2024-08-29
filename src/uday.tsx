import './style.css'
const IncrementDecrement = ({
    count,
    setCount,
}: {
    count: number;
    setCount: any;

}) => {
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const multiply = () => {
        setCount(count * 2)
    }
    // const clear = () => {
    //     setCount(count % 0)
    // }
    return (

        <>
            <div className="outer">
                <div className="inner">

                    <div>{count}</div>
                    <button className='' onClick={() => {
                        increment()
                    }}>+</button>
                    <button className='' onClick={() => {
                        decrement()
                    }}>-</button>
                    <button className='' onClick={() => {
                        multiply()
                    }}>*</button>
                    {/* <button className='' onClick={() => {
                        clear()
                    }}>clear</button> */}
                </div>
            </div>
        </>


    )

}
export default IncrementDecrement
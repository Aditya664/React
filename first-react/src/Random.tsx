function Random() {
    const randomNumber:number = Math.random() * 10;
    return <h1 style={{ backgroundColor: '#878899' }}>Your random No is : {Math.round(randomNumber)}</h1>
}
export default Random;
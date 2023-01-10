const ListSection = () => {
    const list = [1, 2, 3, 4, 5]
    return (
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    )
}

export default ListSection

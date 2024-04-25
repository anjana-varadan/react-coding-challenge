import Dropdown from 'react-bootstrap/Dropdown';

function Filter(props: { categories: string[], handleSelection: any }) {
    const { categories, handleSelection } = props

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const selectedItem = event.currentTarget.textContent;
        handleSelection(selectedItem);
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {categories.length > 0 && categories.map(i => (
                    <Dropdown.Item key={i} onClick={handleClick}>{i}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Filter
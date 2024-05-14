import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HowTo.css";
import SubscreenButton from "../components/SubscreenButton";
import React, {useEffect, useState} from "react";
import useAxiosProtected from "../hooks/useAxiosProtected";

export default function HowTo() {

    const axiosProtected = useAxiosProtected();

    // -----------------
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);

    const countries = {
        'Romania': ['Buc', 'Iasi', 'Cluj'],
        'Germania': ['Munich', 'Berlin', 'Hamburg'],
        'UK': ['Cambridge', 'London'],
    };

    useEffect(() => {
        const newCities = countries[selectedCountry];
        setCities(newCities ? newCities : []);
    }, [selectedCountry]);

    // -----------------

    const [isExpanded, setIsExpanded] = useState(false);
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    // -----------------

    const [searchTerm, setSearchTerm] = useState('');
    const [allOptions, setAllOptions] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']);
    const [filteredOptions, setFilteredOptions] = useState([]);

    useEffect(() => {
        setFilteredOptions(
            allOptions.filter(option =>
                option.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, allOptions]);

    // -----------------

    const [searchTerm2, setSearchTerm2] = useState('');
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [allRows, setAllRows] = useState([
        { name: 'Apple', type: 'Fruit', calories: 30 },
        { name: 'Banana', type: 'Fruit', calories: 90 },
        { name: 'Cherry', type: 'Fruit', calories: 50 },
    ]);
    const [filteredAndSortedRows, setFilteredAndSortedRows] = useState([]);


    useEffect(() => {
        let newRows = allRows.filter(row =>
            Object.values(row).some(value =>
                value.toString().toLowerCase().includes(searchTerm2.toLowerCase())
            )
        );

        if (sortColumn) {
            newRows = newRows.sort((a, b) => {
                const aValue = a[sortColumn];
                const bValue = b[sortColumn];

                if (aValue < bValue) {
                    return sortDirection === 'asc' ? -1 : 1;
                } else if (aValue > bValue) {
                    return sortDirection === 'asc' ? 1 : -1;
                } else {
                    return 0;
                }
            });
        }

        setFilteredAndSortedRows(newRows);
    }, [searchTerm2, sortColumn, sortDirection, allRows]);



    return (
        <div className={"HowTo"}>
            <Header/>
            <div className={"HowToContainer"}>
                <SubscreenButton text={"HOW TO"} link={"/"}/>
                <main className={"HowToContent"}>
                    <h1>Synopsis</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <h1>HTML</h1>
                    <h2>Tables with colspan and rowspan attributes</h2>
                    <table className={"reqsTable"}>
                        <tr>
                            <th>Luna</th>
                            <th>Bani</th>
                        </tr>
                        <tr>
                            <td>Ianuarie</td>
                            <td>100 RON</td>
                        </tr>
                        <tr>
                            <td>Februarie</td>
                            <td>80 RON</td>
                        </tr>
                        <tr>
                            <td colspan="2">Sum: 180</td>
                        </tr>
                    </table>
                    <h2>Nested tables</h2>
                    <table className={"reqsTable"}>
                        <tr>
                            <th>Luna</th>
                            <th>Bani</th>
                        </tr>
                        <tr>
                            <td>Ianuarie</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Februarie</td>
                            <td>80</td>
                        </tr>
                        <table>
                            <tr>
                                <th>Sum</th>
                                <th>180</th>
                            </tr>
                        </table>
                    </table>
                    <h2>Nested lists</h2>
                    <ul className={"reqsList"}>
                        <li>Item 1</li>
                        <li>Item 2
                            <ul className={"reqsList"}>
                                <li>Subitem 1</li>
                                <li>Subitem 2</li>
                            </ul>
                        </li>
                        <li>Item 3</li>
                    </ul>
                    <h1>JavaScript</h1>
                    <h2>Dynamically built drop-down (ex county+city, the 2nd list updates on change)</h2>
                    <div>
                        <select onChange={(e) => setSelectedCountry(e.target.value)}>
                            <option value="">Select a county</option>
                            {Object.keys(countries).map((county) => (
                                <option key={county} value={county}>
                                    {county}
                                </option>
                            ))}
                        </select>

                        <select>
                            <option value="">Select a city</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>

                    <h2>List which can expand</h2>

                    <div>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index} style={{display: index < 2 || isExpanded ? 'block' : 'none'}}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        {!isExpanded ? (
                            <button onClick={() => setIsExpanded(true)}>View More</button>
                        ) : (
                            <button onClick={() => setIsExpanded(false)}>Hide</button>
                        )}
                    </div>

                    <h1>React</h1>
                    <h2>Live search on select input</h2>

                    <div>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />

                        <select>
                            {filteredOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <h2>Search by keywords and sorting by column</h2>

                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm2}
                            onChange={e => setSearchTerm2(e.target.value)}
                        />

                        <table className={"reqsTable"}>
                            <thead>
                            <tr>
                                {Object.keys(allRows[0]).map(column => (
                                    <th key={column}>
                                        {column}
                                        <button onClick={() => {
                                            if (sortColumn === column) {
                                                setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                                            } else {
                                                setSortColumn(column);
                                                setSortDirection('asc');
                                            }
                                        }}>
                                            Sort
                                        </button>
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {filteredAndSortedRows.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, index) => (
                                        <td key={index}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                </main>
            </div>
            <Footer/>
        </div>
    )
}
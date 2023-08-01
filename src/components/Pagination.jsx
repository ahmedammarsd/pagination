import React, { useState } from 'react'

const Pagination = ({postPerPage , totalPosts , paginate}) => {
    const pageNumber = [];
    for (let i=1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumber.push(i);
    }
    const [ activePage , setActivePage] = useState(1);
    const handlePageClick = (number) => {
        setActivePage(number);
        paginate(number)
    }
  return (
    <div className="pagination">
        <ul>
            {
                pageNumber.map( (number) => (
                    <li key={number}>
                        <p
                    
                        className={`
                        page-link ${
                            activePage === number ? "p-active" : ""
                        }
                        `}
                        onClick={() => {
                            handlePageClick(number);
                            paginate(number)
                        }}
                        >{number}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Pagination
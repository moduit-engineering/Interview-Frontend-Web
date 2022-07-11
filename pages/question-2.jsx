import DataTable from "react-data-table-component"
import TagsComponent from "@components/tags"
import { useState, useMemo } from "react"
import FilterComponent from "@components/filter"

const columns = [
  {
    name: "Product Name",
    selector: (row) => row.title,
    sortable: true
  },{
    name: "Product Code",
    cell: (row) => {
      return (
        <div className='text-center'>{row.id}</div>
      )
    }
  },{
    name: "Category",
    cell: (row) => {
      return (
        <div className='text-center'>{row.category}</div>
      )
    }
  },{
    name: 'Description',
    cell: (row) => {
      return (
        <div className='text-center'>{row.description}</div>
      )
    }
  },{
    name: 'Tags',
    cell: (row) => <TagsComponent tags={row.tags} />,
  }
];

const Question2 = (props) => {

	const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = props.data.filter(
		item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
      <div className='flex flex-nowrap'>
			  <FilterComponent type='text' onFilter={e => setFilterText(e.target.value)} filterText={filterText} />
      </div>
		);
	}, [filterText, resetPaginationToggle]);

  return (
    <>
      <div className="flex justify-between mt-0 sm:mt-6">
        <h1 className="font-bold text-xl">Question 2</h1>
        {subHeaderComponentMemo}
      </div>
      <div className="mt-6 p-6 bg-white rounded-md drop-shadow-md">
        <DataTable 
          style={{maxWidth: '100%'}}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          persistTableHead
          columns={columns} 
          data={filteredItems} 
        />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const data = await fetch(
    "https://screening.moduit.id/frontend/web/question/two"
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return [];
    });

  return {
    props: {
      data: data,
    },
  };
}

export default Question2;

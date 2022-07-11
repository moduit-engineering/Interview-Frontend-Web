import DataTable from "react-data-table-component"
import TagsComponent from "@components/tags";

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

const Home = (props) => {

  return (
    <>
      <h1 className="font-bold text-xl mt-0 sm:mt-6">Question 1</h1>
      <div className="mt-6 p-6 bg-white rounded-md drop-shadow-md">
        <DataTable 
          style={{maxWidth: '100%'}}
          pagination
          columns={columns} 
          data={props.data} 
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {

  const data = await fetch('https://screening.moduit.id/frontend/web/question/one')
                        .then(response => {
                          return response.json()
                        })
                        .catch(error => {
                          return []
                        }); 

  return {
    props: {
      data: data
    }
  }
}

export default Home

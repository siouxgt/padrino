import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';

/* componenteDidMount = () => {
   fetch('https://pokeapi.co/api/v2/pokemon/ditto',{
   method: 'GET'

})
.then((response) => response.json() )
.then((responseJson) => {
  console.log(responseJson);
})
} */



const tableCampeones = [
  {id:1, año:"2000", campeon:"America", subcampeon:"Toluca"},
  {id:2, año:"2001", campeon:"Cruz azul", subcampeon:"Toluca"},
  {id:3, año:"2002", campeon:"Sinaloa", subcampeon:"Toluca"},
  {id:4, año:"2003", campeon:"Veracruz", subcampeon:"Toluca"},
  {id:5, año:"2004", campeon:"Toluca", subcampeon:"Toluca"},
  {id:6, año:"2005", campeon:"Celaya", subcampeon:"Toluca"},
  {id:7, año:"2006", campeon:"Monterrey", subcampeon:"Toluca"},
  {id:8, año:"2007", campeon:"Tigres", subcampeon:"Toluca"},
  {id:9, año:"2008", campeon:"Tijuana", subcampeon:"Toluca"},
  {id:10, año:"2009", campeon:"Pumas", subcampeon:"Toluca"},
  {id:11, año:"2010", campeon:"Irapuato", subcampeon:"Toluca"},
  {id:12, año:"2011", campeon:"Guadalajara", subcampeon:"Toluca"},
  {id:13, año:"2012", campeon:"Necaxa", subcampeon:"Toluca"},
  {id:14, año:"2013", campeon:"Toros neza", subcampeon:"Toluca"},
  {id:15, año:"2014", campeon:"Tigres", subcampeon:"Toluca"},
  {id:16, año:"2015", campeon:"Monterrey", subcampeon:"Toluca"},
  {id:17, año:"2016", campeon:"Toluca", subcampeon:"Toluca"},
  {id:18, año:"2017", campeon:"Irapuato", subcampeon:"Toluca"},
  {id:19, año:"2018", campeon:"Monterrey", subcampeon:"Toluca"},
  {id:20, año:"2019", campeon:"Veracruz", subcampeon:"Toluca"},
];

const columnas = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true
  },
  {
    name: 'Año',
    selector: 'año',
    sortable: true
  },
  {
    name: 'Campeon',
    selector: 'campeon',
    sortable: true
  },
  {
    name: 'SubCampeon',
    selector: 'subcampeon',
    sortable: true
  }
]


function App() {
  return (
    <div>
      <DataTable
      columns={columnas}
      data={tableCampeones}
      title="Campeones Del 2000-2019"
      />
    </div>
  );
}

export default App;

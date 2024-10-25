import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DepositAgent from './component/DepositAgent.jsx';
import Home from './component/Home.jsx';
import HomePage from './component/HomePage.jsx';
import Lenden from './component/Lenden.jsx';
import CreateAccount from './component/CreateAccount.jsx';
import Condition from './component/Condition.jsx';
import HowToBeAgent from './component/HowToBeAgent.jsx';
import HowToBeMaster from './component/HowToBeMaster.jsx';
import Ovijog from './component/Ovijog.jsx';
import AgentType from './component/AgentType.jsx';
import SiteAdmin from './component/SiteAdmin.jsx';
import SubAdmin from './component/SubAdmin.jsx';
import MasterAgent from './component/MasterAgent.jsx';
import CustomerService from './component/CustomerService.jsx';
import NewNumber from './component/NewNumber.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/depositAgent',
        element:<DepositAgent></DepositAgent>
      },
      {
        path:'/homepage',
        element:<HomePage></HomePage>
      },
      {
        path:'/lenden',
        element:<Lenden></Lenden>
      },
      {
        path:'/create',
        element:<CreateAccount></CreateAccount>
      },
      {
        path:'/condition',
        element:<Condition></Condition>
      },
      {
        path:'/howToBeAgent',
        element:<HowToBeAgent></HowToBeAgent>
      },
      {
        path:'/master',
        element:<HowToBeMaster></HowToBeMaster>
      },
      {
        path:'/ovijog',
        element:<Ovijog></Ovijog>
      },
      {
        path:'/agenttype',
        element:<AgentType></AgentType>
      },
      {
        path:'/siteAdmin',
        element:<SiteAdmin></SiteAdmin>
      },
      {
        path:'/subAdmin',
        element:<SubAdmin></SubAdmin>
      },
      {
        path:'/masterAgentList',
        element:<MasterAgent></MasterAgent>
      },
      {
        path:'/customerService',
        element:<CustomerService></CustomerService>
      },
      {
        path:'/newNumber',
        element:<NewNumber></NewNumber>
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

// import Profile from '../Custom_Components/UserProfile'
// import Profile from "../Profile/UserProfile";
import { UserProfile } from '../Profile/UserProfile';



function BasicExample() {


  return (

    <>

      <nav class="bg-white border-gray-600 dark:bg-gray-600">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-1">
          <a href="/Manager/home" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://thumbs.dreamstime.com/b/manager-38039871.jpg" class="h-10" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Manager</span>
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
           
            <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"><UserProfile></UserProfile></a>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a href="/Manager/home" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/Manager/Pending" class="text-gray-900 dark:text-white hover:underline">pending</a>
              </li>
              <li>
                <a href="/Manager/approvedBDF" class="text-gray-900 dark:text-white hover:underline">Approved(DF)</a>
              </li>
              <li>
                <a href="/Manager/approvedBDT" class="text-gray-900 dark:text-white hover:underline">Approved(DT)</a>
              </li>
              <li>
                <a href="/Manager/Delivered" class="text-gray-900 dark:text-white hover:underline">Completed</a>
              </li>
              <li>
                <a href="/Manager/Cancelled" class="text-gray-900 dark:text-white hover:underline">Cancelled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
         </>
  );
}

export default BasicExample;

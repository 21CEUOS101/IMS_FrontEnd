import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { useState } from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet"
import { updateProfile } from '../../Services/DeliveryManService'
import Swal from 'sweetalert2';
export function EditProfile({ data }) {


  const { warehouse, user, deliveryman } = data;

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    password: '',
    status: deliveryman.status
  });
  formData.warehouseId = warehouse.id;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const toggleAvailability = () => {
    setFormData({
      ...formData,
      availability: formData.status === 'available' ? 'not available' : 'available',
    });

  };


  const HandleSubmit = async () => {
    console.log(formData)
    try {
      if (formData.password === '') {
        Swal.fire({
          title: "password can't be null",
          text:"please enter new password",
          icon: "error",
          timer:"5000"

        }).then(() => [
          window.location.href = "/Delivery_man/dashboard"
        ]);

      }
      else {
        const profile = await updateProfile(deliveryman.id, formData);

        if (profile) {
          console.log("Profile updated successfully");
          Swal.fire({
            title: "profile updated successfully",
            icon: "success",
            timer:"4000"
          }).then(() => [
            window.location.href = "/Delivery_man/dashboard"
          ]);
        } else {
          console.log("Failed to update profile");
          Swal.fire({
            title: " Something went wrong!",
            icon: "question",
            timer:"2000"
          }).then(() => [
            window.location.href = "/Delivery_man/dashboard"
          ]);
        }}
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    
  };




  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>


          <div className="grid grid-cols-4 items-center gap-4">

            <div className="col-span-3 flex items-center">

            </div>
          </div>
        </div>
        <SheetFooter>
          <Button onClick={HandleSubmit}>Save changes</Button>

        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { UploadAvatarImg } from './UploadAvatarImg';

export const ProfileEdit = () => {
  const { data: session, update } = useSession();
  const name = session?.user?.name;
  const phone = session?.user?.phone;
  const email = session?.user?.email;
  const company = session?.user?.company;
  const Website = session?.user?.Website;
  const image = session?.user?.image;

  const [openUpload, setOpenUpload] = useState(false);

  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newWebsite, setNewWebsite] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setNewName(name);
    setNewPhone(phone);
    setNewEmail(email);
    setNewCompany(company);
    setNewWebsite(Website);
    setImageUrl(image);
  }, [name, phone, email, company, Website, image]);
  console.log(name);

  const openUploadHandel = () => {
    setOpenUpload(!openUpload);
  };
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    update({
      name: newName,
      company: newCompany,
      email: newEmail,
      Website: newWebsite,
      phone: newPhone,
      image: imageUrl,
    });
    setOpenUpload(!openUpload);
  };
  return (
    <div>
      <ProfileHeader tittle="Edit you profile" />
      <div className="mt-8 flex flex-col items-center w-full ">
        <div className=" mb-8">
          <h3 className=" text-sm">Avatar</h3>
          <div className="flex flex-col items-center gap-8 mt-4">
            <div className="rounded-full h-[100px] w-[100px] text-center overflow-hidden  ">
              <Image
                className="  w-full  "
                src={session?.user?.image ? session?.user?.image : '/Avatar.png'}
                width={100}
                height={100}
                alt=""
              />
            </div>
            {openUpload ? (
              <UploadAvatarImg
                openUploadHandler={openUploadHandel}
                setImageUrl={setImageUrl}
                imageUrl={imageUrl}
              />
            ) : (
              <div
                onClick={openUploadHandel}
                className="px-4 py-2 border border-solid border-gray-300 bg-gray-100 rounded-xl cursor-pointer text-gray-500 hover:bg-gray-300 ">
                Upload new image
              </div>
            )}
          </div>
        </div>
        <form className="flex flex-col gap-6 items-center w-[60%]" onSubmit={formHandler}>
          <div className="w-full">
            <h3 className=" text-start text-sm mb-2">Name</h3>
            <input
              className=" p-2 border border-solid border-gray-300 bg-gray-100 rounded-xl w-full  dark:text-black focus:border-gray-500 focus:border-2"
              type="text"
              placeholder="Enter new name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <h3 className=" text-sm mb-2">E-mail</h3>
            <input
              className=" p-2 border border-solid border-gray-300 bg-gray-100 rounded-xl  dark:text-black w-full focus:border-gray-500 focus:border-2"
              type="text"
              placeholder="Enter new name"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <h3 className=" text-sm mb-2">Company name</h3>
            <input
              className=" p-2 border border-solid border-gray-300 bg-gray-100 rounded-xl w-full dark:text-black focus:border-gray-500 focus:border-2"
              type="text"
              placeholder="Enter new name"
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
            />
          </div>
          <div className="w-full">
            <h3 className=" text-sm mb-2">Link to Website(without http://)</h3>
            <input
              className=" p-2 border border-solid border-gray-300 bg-gray-100 rounded-xl w-full dark:text-black focus:border-gray-500 focus:border-2"
              type="text"
              placeholder="Enter new name"
              value={newWebsite}
              onChange={(e) => setNewWebsite(e.target.value)}
            />
          </div>
          <div className="w-full">
            <h3 className=" text-sm mb-2">Phone number</h3>
            <input
              className=" p-2 border border-solid border-gray-300 bg-gray-100 rounded-xl w-full dark:text-black focus:border-gray-500 focus:border-2"
              type="text"
              placeholder="Enter new name"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
            />
          </div>

          <button className="my-4 py-2 text-center w-full bg-green-300 rounded-xl hover:bg-green-400 dark:text-black">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

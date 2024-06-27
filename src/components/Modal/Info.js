import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { City, Country, State } from "country-state-city";
import { upsertContactInfo, upsertProperty, upsertSellerInfo } from '../../services/supplier';

export default function Info(prop) {

    const [sellerInfo, setSellerInfo] = useState({
        id: null,
        type: "",
        name: "",
        email: "",
        shippingAddr: "",
        country: "",
        address1: "",
        address2: "",
        state: "",
        city: "",
        postalCode: "",
        phone: "",
    });
    const [contact, setContact] = useState({
        id: null,
        name: "",
        contactInfo: "",
    });
    const [property, setProperty] = useState({
        id: null,
        name: "",
        attributes: []
    })
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [countryCode, setCountryCode] = useState("");
    const countries = Country.getAllCountries();

    const saveSeller = async () => {
        const response = await upsertSellerInfo({
            id: sellerInfo.id,
            type: sellerInfo.type,
            name: sellerInfo.name,
            email: sellerInfo.email,
            country: sellerInfo.country.name ? sellerInfo.country.name : sellerInfo.country,
            shippingAddr: sellerInfo.shippingAddr,
            address: {
                line1: sellerInfo.address1,
                line2: sellerInfo.address2,
                state: sellerInfo.state.name ? sellerInfo.state.name : sellerInfo.state,
                city: sellerInfo.city.name ? sellerInfo.city.name : sellerInfo.city,
                postalCode: sellerInfo.postalCode,
            },
            phoneNumber: sellerInfo.phoneNumber,
        })

        if (response) {
            window.location.reload();
        }
    }

    const saveContact = async () => {
        const response = await upsertContactInfo({
            id: contact.id,
            name: contact.name,
            contactInfo: contact.contactInfo,
        })

        if (response) {
            window.location.reload();
        }
    }

    const resetInfo = () => {
        if (prop.type === 'seller') {
            setSellerInfo({
                type: "",
                name: "",
                email: "",
                country: "",
                shippingAddr: "",
                address: {
                    line1: "",
                    line2: "",
                    state: "",
                    city: "",
                    postalCode: "",
                },
                phone: "",
            })
        } else if (prop.type === 'contact') {
            setContact({
                name: "",
                contactInfo: "",
            })
        } else {
            setProperty({
                name: "",
                attributes: []
            })
        }
    }

    const handleUpdateSeller = (e) => {
        const { name, value } = e.target;
        if (name === "country") {
            console.log(name, value)
            const parsedVal = JSON.parse(value);
            const countryStates = State.getStatesOfCountry(parsedVal.isoCode);
            setStates(countryStates);
            setCountryCode(parsedVal.isoCode);
            setSellerInfo({
                ...sellerInfo,
                [name]: parsedVal,
            })
            return null
        } else if (name === "state") {
            const parsedVal = JSON.parse(value);
            const stateCities = City.getCitiesOfState(countryCode, parsedVal.isoCode);
            setCities(stateCities);
            setSellerInfo({
                ...sellerInfo,
                [name]: parsedVal,
            })
            return null
        }
        setSellerInfo({
            ...sellerInfo,
            [name]: value,
        });
    };

    const handleUpdateContact = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    }

    const [propAttr, setPropAttr] = useState([])

    const handleUpdateProperty = (e) => {
        const { name, value } = e.target;
        setProperty({
            ...property,
            [name]: value,
        });
    }

    const handlePhoneInput = (value) => {
        setSellerInfo({
            ...sellerInfo,
            phone: value,
        });
    };

    const removeAttr = (index) => {
        const filtered = property.attributes.filter((item) => item !== index)

        setProperty({
            ...property,
            attributes: filtered
        })
    }


    const [attr, setAttr] = useState({
        type: "",
        value: "",
    })

    const addAttribute = (data) => {
        if (attr.type === "" || attr.value === "") {
            return null
        }
        const newAttributes = [...property.attributes, { type: attr.type, value: attr.value }];

        setProperty({
            ...property,
            attributes: newAttributes
        })
    }

    const saveProperty = async () => {
        const response = await upsertProperty({
            id: property.id,
            name: property.name,
            attributes: property.attributes
        })

        if (response) {
            window.location.reload();
        }
    }


    useEffect(() => {
        if (prop.data) {
            if (prop.type === 'seller') {
                setSellerInfo({
                    id: prop.data._id,
                    type: prop.data.type,
                    name: prop.data.name,
                    email: prop.data.email,
                    country: prop.data.country,
                    shippingAddr: prop.data.shippingAddr,
                    address1: prop.data.address ? prop.data.address.line1 : "",
                    address2: prop.data.address ? prop.data.address.line2 : "",
                    state: prop.data.address ? prop.data.address.state : "",
                    city: prop.data.address ? prop.data.address.city : "",
                    postalCode: prop.data.address ? prop.data.address.postalCode : "",
                    phoneNumber: prop.data.phoneNumber,
                })
            } else if (prop.type === 'contact') {
                setContact({
                    id: prop.data._id,
                    name: prop.data.name,
                    contactInfo: prop.data.contactInfo,
                })
            } else {
                setProperty({
                    id: prop.data._id,
                    name: prop.data.name,
                    attributes: prop.data.attributes
                })
            }
        }
    }, [])

    return (
        <div className='overflow-auto' style={{
            width: '100%',
            height: '95%'
        }}>
            {
                prop.type === 'seller' ?
                    <>
                        <div className="common__edit__proe__wrap mt-4">
                            <div className="edit__profilfile__inner__top__blk">
                                <div className="edit__profile__inner__title">
                                    <h5>Shipping Address Name</h5>
                                </div>
                                <div className="edit_profile_inner_top_right">
                                    <div className="edit__profile__angle__ico">
                                        <span>
                                            <img src="assets/img/angle_up.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="single__edit__profile__step mb-3">
                                <input
                                    type="text"
                                    placeholder="Enter Shipping Address Name* (Home, gallery, studio, etc)"
                                    name="type"
                                    value={sellerInfo.shippingAddr}
                                    onChange={handleUpdateSeller}
                                />
                            </div>
                            <div className="edit__profilfile__inner__top__blk">
                                <div className="edit__profile__inner__title">
                                    <h5>Seller Information</h5>
                                </div>
                                <div className="edit_profile_inner_top_right">
                                    <div className="edit__profile__angle__ico">
                                        <span>
                                            <img src="assets/img/angle_up.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="edit__profile__form">
                                <div className="row gy-4 gx-3">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single__edit__profile__step">
                                            <label htmlFor="#">Name*</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Name*"
                                                name="name"
                                                value={sellerInfo.name}
                                                onChange={handleUpdateSeller}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single__edit__profile__step">
                                            <label htmlFor="#">E-mail*</label>
                                            <input
                                                type="text"
                                                placeholder="Email address*"
                                                name="email"
                                                value={sellerInfo.email}
                                                onChange={handleUpdateSeller}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single__edit__profile__step_custom_2">
                                            <label htmlFor="#">Country*
                                                <span className="text-sm text-white ml-10">({prop.data ? prop.data.country : ""})</span>
                                            </label>
                                            <select
                                                class="form-select"
                                                aria-label="select curation"
                                                name="country"
                                                value={JSON.stringify(sellerInfo.country)}
                                                onChange={handleUpdateSeller}
                                            >
                                                <option value="">Select</option>
                                                {countries.map((item) => (
                                                    <option
                                                        key={item.isoCode}
                                                        value={JSON.stringify(item)}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="common__edit__proe__wrap mt-4">
                            <div className="edit__profilfile__inner__top__blk">
                                <div className="edit__profile__inner__title">
                                    <h5>Shipping Address</h5>
                                </div>
                                <div className="edit_profile_inner_top_right">
                                    <div className="edit__profile__angle__ico">
                                        <span>
                                            <img src="assets/img/angle_up.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="edit__profile__form">
                                <div className="row gy-4 gx-3">
                                    <div className="col-md-6">
                                        <div className="single__edit__profile__step">
                                            <label htmlFor="#">Address 1*</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Your Street Address*"
                                                name="address1"
                                                value={sellerInfo.address1}
                                                onChange={handleUpdateSeller}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single__edit__profile__step">
                                            <label htmlFor="#">Address 2</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Your Street Address*"
                                                name="address2"
                                                value={sellerInfo.address2}
                                                onChange={handleUpdateSeller}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single__edit__profile__step_custom_2">
                                            <label htmlFor="#">State*
                                                <span className="text-sm text-white ml-10">({prop.data ? prop.data.address.state : ""})</span>
                                            </label>
                                            <select
                                                class="form-select"
                                                aria-label="select curation"
                                                name="state"
                                                value={sellerInfo.state ? JSON.stringify(sellerInfo.state) : ""}
                                                onChange={handleUpdateSeller}
                                            >
                                                <option value="">Select</option>
                                                {states.map((item) => (
                                                    <option
                                                        key={item.isoCode}
                                                        value={JSON.stringify(item)}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single__edit__profile__step_custom_2">
                                            <label htmlFor="#">City*
                                                <span className="text-sm text-white ml-10">({prop.data ? prop.data.address.city : ""})</span>
                                            </label>
                                            <select
                                                class="form-select"
                                                aria-label="select curation"
                                                name="city"
                                                value={sellerInfo.city ? JSON.stringify(sellerInfo.city) : ""}
                                                onChange={handleUpdateSeller}
                                            >
                                                <option value="">Select</option>
                                                {cities.map((item) => (
                                                    <option key={item.isoCode} value={item.name}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single__edit__profile__step">
                                            <label htmlFor="#">Postal Code*</label>
                                            <input
                                                type="number"
                                                placeholder="Enter Postal Code"
                                                name="postalCode"
                                                value={sellerInfo.postalCode ? sellerInfo.postalCode : ""}
                                                onChange={handleUpdateSeller}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single__edit__profile__step">
                                            <label htmlFor="#">Phone Number*</label>
                                            <PhoneInput
                                                id="mobile_code"
                                                enableLongNumbers={true}
                                                containerClass="phone-container"
                                                buttonClass="phone-dropdown"
                                                inputClass="phone-control"
                                                country={"us"}
                                                value={sellerInfo.phoneNumber}
                                                onChange={handlePhoneInput}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edit__profile__bottom__btn half__width__btn">
                            <a
                                role="button"
                                className="cancel"
                                onClick={resetInfo}
                            >
                                Cancel
                            </a>
                            <a
                                role="button"
                                onClick={saveSeller}
                            >
                                Save{" "}
                            </a>
                        </div>
                    </> : null
            }

            {
                prop.type === 'contact' ?
                    <>
                        <div className="common__edit__proe__wrap mt-4">
                            <div className="edit__profilfile__inner__top__blk">
                                <div className="edit__profile__inner__title">
                                    <h5>Contact Information Name</h5>
                                </div>
                                <div className="edit_profile_inner_top_right">
                                    <div className="edit__profile__angle__ico">
                                        <span>
                                            <img src="assets/img/angle_up.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="edit__profile__form">
                                <div className="row gy-4 gx-3">
                                    <div className="col-xl-12">
                                        <div className="single__edit__profile__step mb-3">
                                            <input
                                                type="text"
                                                placeholder="Enter Shipping Address Name* (Home, gallery, studio, etc)"
                                                name="name"
                                                value={contact.name}
                                                onChange={handleUpdateContact}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="common__edit__proe__wrap mt-4">
                            <div className="edit__profilfile__inner__top__blk">
                                <div className="edit__profile__inner__title">
                                    <h5>Contact Information For seller</h5>
                                </div>
                                <div className="edit_profile_inner_top_right">
                                    <div className="edit__profile__angle__ico">
                                        <span>
                                            <img src="assets/img/angle_up.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="edit__profile__form">
                                <div className="row gy-4 gx-3">
                                    <div className="col-xl-12">
                                        <div className="single__edit__profile__step">
                                            <textarea
                                                placeholder="Please describe your product*"
                                                id=""
                                                cols={30}
                                                rows={10}
                                                name="contactInfo"
                                                value={contact.contactInfo}
                                                onChange={handleUpdateContact}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edit__profile__bottom__btn half__width__btn">
                            <a
                                role="button"
                                className="cancel"
                                onClick={resetInfo}
                            >
                                Cancel
                            </a>
                            <a
                                role="button"
                                onClick={saveContact}
                            >
                                Save{" "}
                            </a>
                        </div>
                    </> : null
            }

            {
                prop.type === 'property' ?
                    <>
                        <div className="common__edit__proe__wrap mt-4">
                            <div className="edit__profilfile__inner__top__blk">
                                <div className="edit__profile__inner__title">
                                    <h5>Properties Template Name</h5>
                                </div>
                                <div className="edit_profile_inner_top_right">
                                    <div className="edit__profile__angle__ico">
                                        <span>
                                            <img src="assets/img/angle_up.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="edit__profile__form">
                                <div className="row gy-4 gx-3">
                                    <div className="col-xl-12">
                                        <div className="single__edit__profile__step mb-3">
                                            <input
                                                type="text"
                                                placeholder="Enter Your Properties Template Name"
                                                name="name"
                                                value={property.name}
                                                onChange={handleUpdateProperty}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4 my-6">
                            <p className="text-xl font-medium text-white">Properties value</p>
                            <div className="flex gap-x-4 single__edit__profile__step">
                                <input type="text" placeholder="Type" style={{
                                    width: '10rem'
                                }} className="py-2 px-3 border-2 border-white rounded-md" onChange={(e) => setAttr({
                                    ...attr,
                                    type: e.target.value
                                })} />
                                <input type="text" placeholder="Value" style={{
                                    width: '10rem'
                                }} className="py-2 px-3 border-2 border-white rounded-md" onChange={(e) => setAttr({
                                    ...attr,
                                    value: e.target.value
                                })} />
                                <button className="bg-[#DDF247] text-black py-2 px-3 rounded-md" onClick={addAttribute}>Add</button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {
                                    property.attributes.length > 0 ?
                                        property.attributes.map((item, index) => {
                                            return (
                                                <div className='flex justify-center relative py-3 gap-y-1 flex-col w-[10rem] border-2 border-white rounded-md'
                                                    style={
                                                        propAttr.includes(index) ? { opacity: '0.5' } : {}
                                                    }
                                                >
                                                    <p className='text-gray-400 text-center text-sm'>{item.type}</p>
                                                    <p className='text-white text-center'>{item.value}</p>

                                                    <div className='absolute top-2 right-2 cursor-pointer' onClick={() => removeAttr(item)}>
                                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4 4L14 14" stroke="#DDF247" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M14 4L4 14" stroke="#DDF247" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            )
                                        }) : null
                                }
                            </div>
                        </div>
                        <div className="edit__profile__bottom__btn half__width__btn">
                            <a
                                role="button"
                                className="cancel"
                                onClick={resetInfo}
                            >
                                Cancel
                            </a>
                            <a
                                role="button"
                                onClick={saveProperty}
                            >
                                Save{" "}
                            </a>
                        </div>
                    </> : null
            }

        </div>
    )
}

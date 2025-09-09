'use client'

import React, { useMemo, useState, useEffect, use } from 'react'
import { Check, Pencil, X, Loader2 } from 'lucide-react'
import COUNTRIES from '../../app/checkout/countries'

// --- Tiny helpers ---
const cn = (...c) => c.filter(Boolean).join(' ')



const EMPTY = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
}

function validateAddress(a) {
    const errors = {}
    if (!a.firstName?.trim()) errors.firstName = 'Please enter your First Name'
    if (!a.lastName?.trim()) errors.lastName = 'Please enter your Last Name'
    if (!a.email?.trim()) errors.email = 'Please enter your email'
    else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(a.email)) errors.email = 'Please enter a valid email address'
    }
    if (!a.phone?.trim()) errors.phone = 'Please enter your phone number'
    if (!a.street1.trim()) errors.street1 = 'Please enter address line 1'
    if (!a.city.trim()) errors.city = 'Please enter city/district'
    if (!a.postalCode.trim()) errors.postalCode = 'Please enter postal code'
    if (!a.country.trim()) errors.country = 'Please select a country'
    return errors
}

function hasErrors(obj) {
    return Object.keys(obj).length > 0
}

export default function FormAddressProfile({
    initialAddress,
    onSave,
    readOnly = false,
    className,
}) {
    const [isEditing, setIsEditing] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [saved, setSaved] = useState(false)
    const [stateList, setStateList] = useState([])
    const [form, setForm] = useState({
        ...EMPTY,
        ...initialAddress,
    })
    useEffect(() => {
        setForm({ ...EMPTY, ...initialAddress })
    }, [initialAddress])
    useEffect(() => {
        const countryObj = COUNTRIES.find(c => c.name === form.country)
        if (countryObj) {
            setStateList(countryObj.states || [])
        } else {
            setStateList([])
        }
    }, [form.country])
    const errors = useMemo(() => validateAddress(form), [form])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((f) => ({ ...f, [name]: value }))
        setSaved(false)
    }
    const handleCancel = () => {
        setForm({ ...EMPTY, ...initialAddress })
        setIsEditing(false)
    }
    const handleSave = async () => {
        const errs = validateAddress(form)
        if (hasErrors(errs)) {
            return
        }
        try {
            setIsSaving(true)
            if (onSave) await onSave(form)
            setIsEditing(false)
            setSaved(true)
        } finally {
            setIsSaving(false)
        }
    }

    const line1 = [form.street1, form.street2].filter(Boolean).join(', ')
    const line2 = [form.city, form.state, form.postalCode].filter(Boolean).join(', ')
    return (
        <section
            className={cn(
                'w-full ',
                className
            )}
        >
            <div className="mb-4 flex items-center justify-end gap-4">
                {!readOnly && (
                    isEditing ?
                        <button
                            type="button"
                            onClick={handleCancel}
                            className={cn(
                                'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm shadow-sm',
                                'border-slate-300'
                            )}
                        >
                            <X className="h-4 w-4" /> Cancel
                        </button>
                        :
                        <button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            className={cn(
                                'inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 text-sm shadow-sm',
                                'border-slate-300  active:scale-[.99]'
                            )}
                        >
                            <Pencil className="h-4 w-4" />
                            <span>Edit</span>
                        </button>
                )}
            </div>

            {!isEditing ? (
                <div className="flex justify-between items-center shadow-sm p-6 border border-gray-200 rounded-lg">
                    <div className="rounded-xl text-sm leading-6 flex flex-col gap-2">
                        <div className='flex items-center gap-2'>
                            <label className=''>First Name: </label>

                            <span className="font-medium">
                                {form.firstName || 'Unknown'}
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <label >Last Name</label>

                            <span className="font-medium">
                                {form.lastName || 'Unknown'}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <label className=''>Email: </label>
                            <span className="font-medium">{form.email || 'Unknown'}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <label className=''>Address: </label>
                            <span>{line1 || 'Unknown'}</span>
                            <span>{line2 || 'Unknown'}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <label className=''>Country: </label>
                            <span>{form.country || 'Unknown'}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <label className=''>Phone Number: </label>
                            <span className="">{form.phone || 'Unknown'}</span>
                        </div>
                    </div>

                    {saved && (
                        <div className="flex items-center gap-2 text-sm text-green-600 ">
                            <Check className="h-4 w-4" /> Changes saved
                        </div>
                    )}
                </div>
            ) : (
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSave()
                    }}
                    className="space-y-4"
                >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {/* //-- First Name -- */}
                        <div className="space-y-1.5">
                            <label htmlFor="firstName" className="text-sm font-medium">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                autoComplete="name"
                                className={cn(
                                    'w-full rounded-xl border bg-transparent p-2 outline-none',
                                    'border-slate-300 focus:ring-2 focus:ring-slate-400 '
                                )}
                                placeholder="First Name"
                            />
                            {errors.firstName && <p className="text-xs text-red-600">{errors.firstName}</p>}
                        </div>
                        {/* //-- Last Name -- */}
                        <div className="space-y-1.5">
                            <label htmlFor="lastName" className="text-sm font-medium">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                autoComplete="name"
                                className={cn(
                                    'w-full rounded-xl border bg-transparent p-2 outline-none',
                                    'border-slate-300 focus:ring-2 focus:ring-slate-400 '
                                )}
                                placeholder="Last Name"
                            />
                            {errors.lastName && <p className="text-xs text-red-600">{errors.lastName}</p>}
                        </div>
                        {/* //-- Email -- */}
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                autoComplete="name"
                                className={cn(
                                    'w-full rounded-xl border bg-transparent p-2 outline-none',
                                    'border-slate-300 focus:ring-2 focus:ring-slate-400 '
                                )}
                                placeholder="Email"
                            />
                            {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                        </div>
                        {/* //-- Phone -- */}
                        <div className="space-y-1.5">
                            <label htmlFor="phone" className="text-sm font-medium">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                autoComplete="tel"
                                className={cn(
                                    'w-full rounded-xl border bg-transparent p-2 outline-none',
                                    'border-slate-300 focus:ring-2 focus:ring-slate-400 '
                                )}
                                placeholder=" Phone Number"
                            />
                            {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                        </div>
                        {/* //-- Country -- */}
                        <div className="space-y-1.5">
                            <label htmlFor="country" className="text-sm font-medium">
                                Country
                            </label>
                            <select
                                id="country"
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                autoComplete="country-name"
                                className={cn(
                                    'w-full rounded-xl border bg-transparent p-2 outline-none',
                                    'border-slate-300 focus:ring-2 focus:ring-slate-400 '
                                )}
                            >
                                {COUNTRIES.map((c) => (
                                    <option key={c.name} value={c.name}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                            {errors.country && <p className="text-xs text-red-600">{errors.country}</p>}
                        </div>
                        {/* //-- State -- */}
                        <div className="space-y-1.5">
                            <label htmlFor="state" className="text-sm font-medium">
                                state
                            </label>
                            <select
                                id="state"
                                name="state"
                                value={form.state}
                                onChange={handleChange}
                                autoComplete="state-name"
                                className={cn(
                                    'w-full rounded-xl border bg-transparent p-2 outline-none',
                                    'border-slate-300 focus:ring-2 focus:ring-slate-400 '
                                )}
                            >
                                {stateList.map((c) => (
                                    <option key={c.name} value={c.name}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                            {errors.state && <p className="text-xs text-red-600">{errors.state}</p>}
                        </div>
                        {/* //-- City -- */}
                        <div className="space-y-1.5">
                            <label htmlFor="city" className="text-sm font-medium">
                                City/District
                            </label>
                            <input
                                id="city"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                autoComplete="address-level2"
                                className={cn(
                                    'w-full rounded-xl border bg-transparent p-2 outline-none',
                                    'border-slate-300 focus:ring-2 focus:ring-slate-400 '
                                )}
                                placeholder="City/District"
                            />
                            {errors.city && <p className="text-xs text-red-600">{errors.city}</p>}
                        </div>
                        {/* //-- Postal Code -- */}
                        <div className="space-y-1.5">
                            <label htmlFor="postalCode" className="text-sm font-medium">
                                Postal Code
                            </label>
                            <input
                                id="postalCode"
                                name="postalCode"
                                value={form.postalCode}
                                onChange={handleChange}
                                autoComplete="postal-code"
                                className={cn(
                                    'w-full rounded-xl border bg-transparent p-2 outline-none',
                                    'border-slate-300 focus:ring-2 focus:ring-slate-400 '
                                )}
                                placeholder="Postal Code"
                            />
                            {errors.postalCode && (
                                <p className="text-xs text-red-600">{errors.postalCode}</p>
                            )}
                        </div>
                        {/* Street 1 & 2 */}
                        <div className="col-span-1 sm:col-span-2 space-y-1.5">
                            <label htmlFor="street1" className="text-sm font-medium">
                                Address Line 1
                            </label>
                            <input
                                id="street1"
                                name="street1"
                                value={form.street1}
                                onChange={handleChange}
                                autoComplete="address-line1"
                                className={cn(
                                    'w-full rounded-xl border bg-transparent p-2 outline-none',
                                    'border-slate-300 focus:ring-2 focus:ring-slate-400 '
                                )}
                                placeholder="123 Main St"
                            />
                            {errors.street1 && <p className="text-xs text-red-600">{errors.street1}</p>}
                        </div>
                        <div className="col-span-1 sm:col-span-2 space-y-1.5">
                            <label htmlFor="street2" className="text-sm font-medium">
                                Address Line 2 <span className="">(optional)</span>
                            </label>
                            <input
                                id="street2"
                                name="street2"
                                value={form.street2}
                                onChange={handleChange}
                                autoComplete="address-line2"
                                className={cn(
                                    'w-full rounded-xl border bg-transparent p-2 outline-none',
                                    'border-slate-300 focus:ring-2 focus:ring-slate-400 '
                                )}
                                placeholder="Apartment, suite, etc."
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className={cn(
                                'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm shadow-sm',
                                'border-slate-300 hover:bg-slate-50  '
                            )}
                        >
                            <X className="h-4 w-4" /> Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className={cn(
                                'inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm',
                                'hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 '
                            )}
                        >
                            {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                            {isSaving ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            )
            }
        </section >
    )
}



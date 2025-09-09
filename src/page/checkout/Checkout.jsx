import React, { useState } from "react";

export default function Checkout() {
    const [useBillingSame, setUseBillingSame] = useState(true);
    const [usePrescriptionOnFile, setUsePrescriptionOnFile] = useState(true);

    return (
        <div className="max-w-4xl mx-auto p-8 space-y-10 bg-gray-50 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

            {/* Contact */}
            <div>
                <h2 className="text-xl font-semibold pb-2">Contact</h2>
                <div className="space-y-4 flex gap-4">
                    <input type="email" placeholder="Email" className="w-full border p-3 rounded-lg h-12" required />
                    <input type="tel" placeholder="Mobile Phone" className="w-full border p-3 rounded-lg h-12" required />
                </div>
            </div>

            {/* Shipping */}
            <div>
                <h2 className="text-xl font-semibold pb-2">Shipping</h2>
                <div className="space-y-4 flex gap-4">
                    <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-lg h-12" required />
                    <input type="text" placeholder="Address" className="w-full border p-3 rounded-lg h-12" required />
                    <select className="w-full border p-3 rounded-lg h-12">
                        <option>Select Shipping Method</option>
                        <option>Standard (5–7 days)</option>
                        <option>Express (2–3 days)</option>
                    </select>
                </div></div>

            {/* Billing */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Billing</h2>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={useBillingSame}
                        onChange={() => setUseBillingSame(!useBillingSame)}
                    />
                    Same as shipping address
                </label>
                {!useBillingSame && (
                    <input type="text" placeholder="Billing Address" className="w-full border p-3 rounded-lg" />
                )}
            </section>

            {/* Payment */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Payment</h2>
                <select className="w-full border p-3 rounded-lg">
                    <option>Select Payment Method</option>
                    <option>Credit/Debit Card</option>
                    <option>PayPal</option>
                    <option>Financing</option>
                </select>
            </section>

            {/* Prescription */}
            <div>
                <h2 className="text-xl font-semibold pb-2">Prescription</h2>
                <div className="space-y-4">
                    <div className="flex gap-10">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="prescription"
                                checked={usePrescriptionOnFile}
                                onChange={() => setUsePrescriptionOnFile(true)}
                            />
                            Use prescription on file
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="prescription"
                                checked={!usePrescriptionOnFile}
                                onChange={() => setUsePrescriptionOnFile(false)}
                            />
                            Upload prescription
                        </label>
                        {!usePrescriptionOnFile && (
                            <input type="file" accept="image/*,.pdf" className="w-100 border p-3 rounded-lg h-12" />
                        )}
                    </div>
                    <div className="flex gap-4">
                        <input type="text" placeholder="PD (single/dual)" className="w-full border p-3 rounded-lg" />
                        <input type="text" placeholder="Segment height (if progressive)" className="w-full border p-3 rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Product/Lens selections */}
            <div>
                <h2 className="text-xl font-semibold pb-2">Lens Selections</h2>
                <div className="space-y-4 grid grid-cols-2 gap-4 ">

                    <select className="w-full border p-3 rounded-lg h-12">
                        <option>Lens Type</option>
                        <option>Single Vision</option>
                        <option>Progressive</option>
                    </select>
                    <select className="w-full border p-3 rounded-lg h-12">
                        <option>Material</option>
                        <option>Polycarbonate</option>
                        <option>Trivex</option>
                    </select>
                    <select className="w-full border p-3 rounded-lg h-12">
                        <option>Coatings</option>
                        <option>Anti-reflective</option>
                        <option>Blue light filter</option>
                    </select>
                    <select className="w-full border p-3 rounded-lg h-12">
                        <option>Tints / Add-ons</option>
                        <option>Photochromic</option>
                        <option>Polarized</option>
                    </select>
                </div>
            </div>

            {/* Insurance */}
            <div>
                <h2 className="text-xl font-semibold pb-2">Insurance</h2>
                <div className="space-y-4">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Apply insurance benefits
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Insurer Name" className="w-full border p-3 rounded-lg" />
                        <input type="text" placeholder="Policy/Plan Number" className="w-full border p-3 rounded-lg" />
                        <input type="text" placeholder="Member ID" className="w-full border p-3 rounded-lg" />
                        <input type="text" placeholder="Group Number" className="w-full border p-3 rounded-lg" />
                        <input type="text" placeholder="Primary Insured’s Name" className="w-full border p-3 rounded-lg" />
                        <input type="date" placeholder="DOB" className="w-full border p-3 rounded-lg" />
                        <input type="text" placeholder="Relationship to Patient" className="w-full border p-3 rounded-lg" />
                    </div>
                    <label className="block">Upload Insurance Card (front/back)</label>
                    <input type="file" multiple className="w-full border p-3 rounded-lg" />

                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Assignment of benefits consent
                    </label>
                </div>
            </div>

            {/* Discounts */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Discounts</h2>
                <input type="text" placeholder="Gift card or discount code" className="w-full border p-3 rounded-lg" />
            </section>

            {/* Notes */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Order Notes</h2>
                <textarea placeholder="Optional notes" className="w-full border p-3 rounded-lg" />
            </section>

            {/* Consents */}
            <section className="space-y-2">
                <label className="flex items-center gap-2">
                    <input type="checkbox" /> I agree to Terms & Conditions
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" /> I agree to Warranty/Return Policy
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" /> I agree to Privacy Policy
                </label>
            </section>

            {/* Submit */}
            <div className="pt-6">
                <button className="w-40 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700">
                    Place Order
                </button>
            </div>
        </div>
    );
}

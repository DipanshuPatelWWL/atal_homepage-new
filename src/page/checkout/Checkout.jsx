import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const navigate = useNavigate();

    const steps = [
        "Contact",
        "Shipping",
        "Billing",
        "Payment",
        "Prescription",
        "Lens Selections",
        "Insurance",
        "Discounts",
        "Notes",
        "Consents",
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        useBillingSame: true,
        usePrescriptionOnFile: true,
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        localStorage.removeItem("checkoutDraft");
        navigate("/place-order")
    };

    // Load draft
    useEffect(() => {
        const savedData = localStorage.getItem("checkoutDraft");
        if (savedData) {
            const parsed = JSON.parse(savedData);
            setFormData(parsed.data);
            setCurrentStep(parsed.step);
        }
    }, []);

    // Save draft
    useEffect(() => {
        localStorage.setItem(
            "checkoutDraft",
            JSON.stringify({ step: currentStep, data: formData })
        );
    }, [formData, currentStep]);

    return (
        <div className="max-w-4xl mx-auto pt-10 px-8 mb-10 mt-10">
            {/* Progress Bar */}
            <div className="flex items-center mb-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex-1 flex items-center">
                        <div
                            className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${index <= currentStep ? "bg-red-600 text-white" : "bg-gray-300"
                                }`}
                        >
                            {index + 1}
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`flex-1 h-1 ${index < currentStep ? "bg-red-600" : "bg-gray-300"
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-semibold text-center mb-6">
                {steps[currentStep]}
            </h2>

            {/* ================= STEP CONTENT ================= */}
            <div className="space-y-6">
                {/* Contact */}
                {currentStep === 0 && (
                    <div className="flex gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={formData.email || ""}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        />
                        <input
                            type="tel"
                            placeholder="Mobile Phone"
                            value={formData.phone || ""}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        />
                    </div>
                )}

                {/* Shipping */}
                {currentStep === 1 && (
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.fullName || ""}
                            onChange={(e) => handleChange("fullName", e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            value={formData.address || ""}
                            onChange={(e) => handleChange("address", e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        />
                        <select
                            value={formData.shippingMethod || ""}
                            onChange={(e) => handleChange("shippingMethod", e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        >
                            <option>Select Shipping Method</option>
                            <option>Standard (5-7 days)</option>
                            <option>Express (2-3 days)</option>
                        </select>
                    </div>
                )}

                {/* Billing */}
                {currentStep === 2 && (
                    <div className="space-y-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.useBillingSame}
                                onChange={() =>
                                    handleChange("useBillingSame", !formData.useBillingSame)
                                }
                            />
                            Same as shipping address
                        </label>
                        {!formData.useBillingSame && (
                            <input
                                type="text"
                                placeholder="Billing Address"
                                value={formData.billingAddress || ""}
                                onChange={(e) => handleChange("billingAddress", e.target.value)}
                                className="w-full border p-3 rounded-lg"
                            />
                        )}
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-4">
                        <select
                            value={formData.paymentMethod || ""}
                            onChange={(e) => handleChange("paymentMethod", e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        >
                            <option value="">Select Payment Method</option>
                            <option value="card">Credit/Debit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="financing">Financing</option>
                        </select>

                        {/* ==== Conditional Forms ==== */}
                        {formData.paymentMethod === "card" && (
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Cardholder Name"
                                    value={formData.cardName || ""}
                                    onChange={(e) => handleChange("cardName", e.target.value)}
                                    className="w-full border p-3 rounded-lg"
                                />
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    value={formData.cardNumber || ""}
                                    onChange={(e) => handleChange("cardNumber", e.target.value)}
                                    className="w-full border p-3 rounded-lg"
                                />
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        value={formData.expiry || ""}
                                        onChange={(e) => handleChange("expiry", e.target.value)}
                                        className="w-1/2 border p-3 rounded-lg"
                                    />
                                    <input
                                        type="text"
                                        placeholder="CVV"
                                        value={formData.cvv || ""}
                                        onChange={(e) => handleChange("cvv", e.target.value)}
                                        className="w-1/2 border p-3 rounded-lg"
                                    />
                                </div>
                            </div>
                        )}

                        {formData.paymentMethod === "paypal" && (
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="PayPal Email"
                                    value={formData.paypalEmail || ""}
                                    onChange={(e) => handleChange("paypalEmail", e.target.value)}
                                    className="w-full border p-3 rounded-lg"
                                />
                            </div>
                        )}

                        {formData.paymentMethod === "financing" && (
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="SSN / ID Number"
                                    value={formData.financingId || ""}
                                    onChange={(e) => handleChange("financingId", e.target.value)}
                                    className="w-full border p-3 rounded-lg"
                                />
                                <input
                                    type="text"
                                    placeholder="Employer Name"
                                    value={formData.employer || ""}
                                    onChange={(e) => handleChange("employer", e.target.value)}
                                    className="w-full border p-3 rounded-lg"
                                />
                            </div>
                        )}
                    </div>
                )}


                {/* Prescription */}
                {currentStep === 4 && (
                    <div className="space-y-4">
                        <div className="flex gap-10">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="prescription"
                                    checked={formData.usePrescriptionOnFile}
                                    onChange={() => handleChange("usePrescriptionOnFile", true)}
                                />
                                Use prescription on file
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="prescription"
                                    checked={!formData.usePrescriptionOnFile}
                                    onChange={() => handleChange("usePrescriptionOnFile", false)}
                                />
                                Upload prescription
                            </label>
                        </div>
                        {!formData.usePrescriptionOnFile && (
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                className="w-full border p-3 rounded-lg"
                            />
                        )}
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="PD (single/dual)"
                                value={formData.pd || ""}
                                onChange={(e) => handleChange("pd", e.target.value)}
                                className="w-full border p-3 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="Segment height"
                                value={formData.segmentHeight || ""}
                                onChange={(e) =>
                                    handleChange("segmentHeight", e.target.value)
                                }
                                className="w-full border p-3 rounded-lg"
                            />
                        </div>
                    </div>
                )}

                {/* Lens Selections */}
                {currentStep === 5 && (
                    <div className="grid grid-cols-2 gap-4">
                        <select
                            value={formData.lensType || ""}
                            onChange={(e) => handleChange("lensType", e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        >
                            <option>Lens Type</option>
                            <option>Single Vision</option>
                            <option>Progressive</option>
                        </select>
                        <select
                            value={formData.material || ""}
                            onChange={(e) => handleChange("material", e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        >
                            <option>Material</option>
                            <option>Polycarbonate</option>
                            <option>Trivex</option>
                        </select>
                        <select
                            value={formData.coating || ""}
                            onChange={(e) => handleChange("coating", e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        >
                            <option>Coatings</option>
                            <option>Anti-reflective</option>
                            <option>Blue light filter</option>
                        </select>
                        <select
                            value={formData.tint || ""}
                            onChange={(e) => handleChange("tint", e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        >
                            <option>Tints / Add-ons</option>
                            <option>Photochromic</option>
                            <option>Polarized</option>
                        </select>
                    </div>
                )}

                {/* Insurance */}
                {currentStep === 6 && (
                    <div className="space-y-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.useInsurance || false}
                                onChange={() =>
                                    handleChange("useInsurance", !formData.useInsurance)
                                }
                            />
                            Apply insurance benefits
                        </label>
                        {formData.useInsurance && (
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Insurer Name"
                                        value={formData.insurerName || ""}
                                        onChange={(e) =>
                                            handleChange("insurerName", e.target.value)
                                        }
                                        className="w-full border p-3 rounded-lg"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Policy/Plan Number"
                                        value={formData.policyNumber || ""}
                                        onChange={(e) =>
                                            handleChange("policyNumber", e.target.value)
                                        }
                                        className="w-full border p-3 rounded-lg"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Member ID"
                                        value={formData.memberId || ""}
                                        onChange={(e) => handleChange("memberId", e.target.value)}
                                        className="w-full border p-3 rounded-lg"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Group Number"
                                        value={formData.groupNumber || ""}
                                        onChange={(e) =>
                                            handleChange("groupNumber", e.target.value)
                                        }
                                        className="w-full border p-3 rounded-lg"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Primary Insured’s Name"
                                        value={formData.primaryInsured || ""}
                                        onChange={(e) =>
                                            handleChange("primaryInsured", e.target.value)
                                        }
                                        className="w-full border p-3 rounded-lg"
                                    />
                                    <input
                                        type="date"
                                        placeholder="DOB"
                                        value={formData.dob || ""}
                                        onChange={(e) => handleChange("dob", e.target.value)}
                                        className="w-full border p-3 rounded-lg"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Relationship to Patient"
                                        value={formData.relationship || ""}
                                        onChange={(e) =>
                                            handleChange("relationship", e.target.value)
                                        }
                                        className="w-full border p-3 rounded-lg"
                                    />
                                </div>
                                <label className="block">Upload Insurance Card</label>
                                <input
                                    type="file"
                                    multiple
                                    className="w-full border p-3 rounded-lg"
                                />
                            </>
                        )}
                    </div>
                )}

                {/* Discounts */}
                {currentStep === 7 && (
                    <input
                        type="text"
                        placeholder="Gift card or discount code"
                        value={formData.discount || ""}
                        onChange={(e) => handleChange("discount", e.target.value)}
                        className="w-full border p-3 rounded-lg"
                    />
                )}

                {/* Notes */}
                {currentStep === 8 && (
                    <textarea
                        placeholder="Optional notes"
                        value={formData.notes || ""}
                        onChange={(e) => handleChange("notes", e.target.value)}
                        className="w-full border p-3 rounded-lg"
                    />
                )}

                {/* Consents */}
                {currentStep === 9 && (
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.agreeTerms || false}
                                onChange={() =>
                                    handleChange("agreeTerms", !formData.agreeTerms)
                                }
                            />
                            I agree to Terms & Conditions
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.agreeWarranty || false}
                                onChange={() =>
                                    handleChange("agreeWarranty", !formData.agreeWarranty)
                                }
                            />
                            I agree to Warranty/Return Policy
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.agreePrivacy || false}
                                onChange={() =>
                                    handleChange("agreePrivacy", !formData.agreePrivacy)
                                }
                            />
                            I agree to Privacy Policy
                        </label>
                    </div>
                )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 pb-5">
                {currentStep > 0 && (
                    <button
                        onClick={prevStep}
                        className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                    >
                        Back
                    </button>
                )}
                {currentStep < steps.length - 1 ? (
                    <button
                        onClick={nextStep}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                        Submit Order
                    </button>
                )}
            </div>
        </div>
    );
}
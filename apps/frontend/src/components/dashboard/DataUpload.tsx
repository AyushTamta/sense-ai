"use client";

import { UploadCloud } from "lucide-react";
import { useState } from "react";
import Papa from "papaparse";

import { useCustomerStore } from "@/lib/store";

export default function DataUpload() {

  const [fileName, setFileName] = useState("");

  const setCustomers = useCustomerStore(
    (state) => state.setCustomers
  );

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    Papa.parse(file, {

      header: true,

      complete: (results) => {

        setCustomers(results.data as any);

        console.log(results.data);
      },
    });
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-10">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Customer Dataset Upload
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            Upload CSV datasets to trigger AI analytics workflows
          </p>
        </div>

        <div className="text-blue-400 text-sm">
          CSV • XLSX • JSON
        </div>

      </div>

      <label
        className="mt-6 border-2 border-dashed border-white/10 rounded-2xl h-52 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500/40 transition bg-black/20"
      >

        <UploadCloud
          size={42}
          className="text-purple-400"
        />

        <p className="text-white mt-4 font-medium">
          Click to upload customer dataset
        </p>

        <p className="text-zinc-500 text-sm mt-2">
          Drag & drop your CSV file here
        </p>

        <input
          type="file"
          className="hidden"
          onChange={handleUpload}
        />

      </label>

      {fileName && (

        <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-2xl p-4">

          <p className="text-green-300 font-medium">
            Dataset uploaded successfully
          </p>

          <p className="text-zinc-400 text-sm mt-1">
            {fileName}
          </p>

        </div>

      )}

    </div>
  );
}
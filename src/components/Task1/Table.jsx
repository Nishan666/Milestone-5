import React from "react";

const Table = ({data}) => {
  return (
    <div className="overflow-x-auto flex justify-center">
  <table className="table-auto divide-y divide-gray-200 border border-gray-300 w-3/4">
    <thead>
      <tr className="bg-gray-50">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upvote</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((item, key) => (
        <tr key={key} className="hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.upvote}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default Table;

<div className="md:w-4/5 text-black">
            <table className="bg-white rounded-lg border-collapse h-72 p-5 m-auto md:w-full">
              <thead>
                <tr>
                  <th className="text-gray-500 bg-gray-900 border-b-2 border-r w-1/3">
                    Vol.3
                  </th>
                  <th className="text-gray-500 bg-gray-900 border-b-2 border-r">
                    Meses
                  </th>
                  <th className="text-gray-500 bg-gray-900 border-b-2 p-2">
                    Fecha Limites de Manuscritos
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableConvocatoria.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="border-t-1 border-solid border-gray text-center">
                        {item.Volumenes}
                      </td>
                      <td className="border-t-1 border-solid border-gray text-center">
                        {item.FechasMeses}
                      </td>
                      <td className="border-t-1 border-solid border-gray text-center">
                        {item.FechaLimite}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <span className="dark:text-white">
              <strong>NOTA: todo el año se reciben contribuciones.</strong>
            </span>
          </div>
import React from 'react'

const LatestSongsLoading = ({children}: any) => {
  return (
            <div className="grid grid-cols-3 grid-rows-2 gap-2 gap-y-4 mt-6">
              {children}
            </div>
  )
}

export default LatestSongsLoading
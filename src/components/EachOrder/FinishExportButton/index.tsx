import React from 'react'

import { Stack, Button, Box } from '@mui/material'

import useAdminUser from '@other-support/hooks/useAdminUser'

const FinishExportButton: React.FC = () => {
  const { adminUser } = useAdminUser()
  if (!adminUser) {
    return null
  }

  return (
    <>
      <style jsx global>{`
        @media only print {
          body {
            counter-reset: page-number;
            -webkit-print-color-adjust: exact !important;
          }

          #header {
            display: none;
          }

          main {
            width: 100vw;
          }

          #each-order
            > :not(#finish-export-button-container),
          #finish-export-button {
            display: none;
          }

          @page {
            margin: 0.5cm;
            size: A4 portrait;
          }

          .print {
            display: block !important;
          }

          .no-print {
            display: none;
          }

          .text {
            page-break-before: auto;
          }
        }
      `}</style>
      {false && (
        <Button
          id="finish-export-button"
          variant="contained"
          onClick={() => window.print()}
        >
          FINISH EXPORT
        </Button>
      )}
      <Box className="print hidden">
        <Box>Do Finish Export</Box>
        <Stack className="bg-yellow-300">
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <p
                key={`first-p-${i}`}
                className="text"
              >
                Test
              </p>
            ))}
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <p
                key={`second-p-${i}`}
                className="text"
              >
                Test1
              </p>
            ))}
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <p
                key={`third-p-${i}`}
                className="text"
              >
                Test2
              </p>
            ))}
          {Array(30)
            .fill(0)
            .map((_, i) => (
              <p
                key={`four-p-${i}`}
                className="text"
              >
                Test3
              </p>
            ))}
        </Stack>
      </Box>
    </>
  )
}

export default FinishExportButton

import React from 'react';

const FarmLocationPreview = ({
  title = 'Farm Location',
  locationLabel = 'Benue, Nigeria',
  address = 'Yenegoa, Benue State, Nigeria',
  latitude = 9.0222,
  longitude = 8.7073,
  mapSnapshotUrl,
}) => {
  // Format coordinate markers (N/S, E/W)
  const formattedLat = `${Math.abs(latitude).toFixed(4)}° ${latitude >= 0 ? 'N' : 'S'}`;
  const formattedLng = `${Math.abs(longitude).toFixed(4)}° ${longitude >= 0 ? 'E' : 'W'}`;

  // Direct Google Maps search link via coordinates
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <div className="w-full max-w-sm rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm">
      {/* Card Header */}
      <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
        {title}
      </h3>

      {/* Map Preview Area */}
      <div className="relative h-20 w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-[#eef0eb]">
        {mapSnapshotUrl ? (
          <img
            src={mapSnapshotUrl}
            alt="Farm location map preview"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          /* Stylized SVG Map Placeholder matching the visual tone */
          <svg
            className="h-full w-full opacity-70"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
          >
            {/* Faint road/boundary grid lines */}
            <path
              d="M-20 60 C80 50, 160 90, 240 70 C300 50, 350 80, 420 75"
              stroke="#94a3b8"
              strokeWidth="1.5"
            />
            <path
              d="M180 -10 C190 60, 210 100, 205 140 C200 200, 240 250, 270 320"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <path
              d="M-10 180 C90 170, 150 200, 280 180 C340 170, 390 190, 420 185"
              stroke="#cbd5e1"
              strokeWidth="1.2"
            />
            <path
              d="M320 0 L310 150 L380 320"
              stroke="#cbd5e1"
              strokeWidth="1"
            />
          </svg>
        )}

        {/* Floating Pin & Tooltip Overlay */}
        <div className="absolute left-[62%] top-[46%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center select-none pointer-events-none">
          <div className="rounded-lg bg-slate-900/95 px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-sm whitespace-nowrap mb-1">
            {locationLabel}
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600/20">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7 text-teal-700 drop-shadow-md"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351A24.25 24.25 0 014.2 12.358a8.25 8.25 0 1115.6 0c-.888 3.518-3.52 7.55-8.26 9.993zm-3.29-10.042a3.75 3.75 0 105.5 0 3.75 3.75 0 00-5.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Address & Coordinates Details */}
      <div className="mt-4 flex items-start gap-2.5">
        <svg
          className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <div>
          <p className="text-sm font-medium text-slate-800 leading-snug">
            {address}
          </p>
          <p className="mt-0.5 text-xs text-slate-500 font-mono">
            {formattedLat}, {formattedLng}
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-5">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-xl border border-slate-300/90 bg-white py-2.5 px-4 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default FarmLocationPreview;
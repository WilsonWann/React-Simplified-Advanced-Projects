import { Fragment } from "react"

export function Skeleton({ short }) {
  return <div className="skeleton" style={{ width: short ? "15rem" : undefined }} />
}

export function SkeletonButton() {
  return <div className="skeleton skeleton-btn" />
}

export function SkeletonList({ amount, children }) {
  return (
    <>
      {Array.from({ length: amount }).map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </>
  )
}
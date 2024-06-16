"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookmark, FaGreaterThan } from "react-icons/fa6";
export function NavMenu() {
  const path = usePathname();
  return (
    <ul className="hidden items-center justify-center gap-2 font-mono sm:gap-10 sm:text-base lg:flex">
      <li
        className={`${
          path.includes("components")
            ? "font-bold text-sky-700 dark:text-sky-400"
            : ""
        }`}
      >
        <Link href="/components/accordion" className="text-sm">
          Components
        </Link>
      </li>
      {/* <li className={`${path.includes('animated-c') ? 'font-semibold text-sky-600 dark:text-sky-400' : ''}`}>
                <Link href="/animated-c">Animated-c</Link>
            </li> */}
      <li
        className={`${
          path.includes("block")
            ? "font-semibold text-sky-800 dark:text-sky-400"
            : ""
        }`}
      >
        <Link href="/blocks" className="text-sm">
          Blocks
        </Link>
      </li>
    </ul>
  );
}

let bookmarks = { components: [], animated: [], blocks: [] };

function loadBookmarks() {
  try {
    const storedBookmarks = localStorage.getItem("nui_bookmarks");
    if (storedBookmarks) bookmarks = JSON.parse(storedBookmarks);
  } catch (error) {
    console.error("Error parsing bookmarks:", error);
  }
}

function saveBookmarks() {
  localStorage.setItem("nui_bookmarks", JSON.stringify(bookmarks));
}

export function addBookmark(category, bookmark) {
  bookmarks[category].push(bookmark);
  saveBookmarks();
}

export function getBookmarks() {
  loadBookmarks();
  return bookmarks;
}

export function getBookmarksByCategory(category) {
  loadBookmarks();
  return bookmarks[category] || [];
}

export function getBookmarkById(category, id) {
  loadBookmarks();
  const categoryBookmarks = bookmarks[category] || [];
  return categoryBookmarks.find((bookmark) => bookmark.id === id) || null;
}

export function removeBookmark(category, id) {
  loadBookmarks();
  const categoryBookmarks = bookmarks[category] || [];
  const index = categoryBookmarks.findIndex((bookmark) => bookmark.id === id);
  if (index !== -1) categoryBookmarks.splice(index, 1);
  saveBookmarks();
}

export function BookmarkDrawer() {
  return (
    <Link href="/bookmarks">
      <FaBookmark size={20} />
    </Link>
  );
}

export function Breadcrumb() {
  const path = usePathname();
  const regex = /^\/([^\/]+)\/([^\/]+)$/;
  const match = path.match(regex);

  if (!match) {
    return null;
  }
  // console.log(match);

  const [, firstSegment, secondSegment] = match;

  return (
    <h6 className="mb-5 text-sm capitalize">
      <span className="text-zinc-500 dark:text-zinc-400">{firstSegment}</span>
      <FaGreaterThan className="mx-1 inline-block size-3" />
      <span className="font-semibold">{secondSegment}</span>
    </h6>
  );
}

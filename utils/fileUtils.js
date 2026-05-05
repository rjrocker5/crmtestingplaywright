/**
 * File operation utility functions
 */

import fs from 'fs';
import path from 'path';

/**
 * Get the full path to a file in the test data directory
 * @param {string} fileName - Name of the file
 * @returns {string} Full file path
 */
export function getTestFilePath(fileName) {
  return path.resolve(__dirname, '../testdata', fileName);
}

/**
 * Get the full path to a file in a custom directory
 * @param {string} directory - Directory name
 * @param {string} fileName - Name of the file
 * @returns {string} Full file path
 */
export function getFilePath(directory, fileName) {
  return path.resolve(__dirname, `../${directory}`, fileName);
}

/**
 * Verify if a file exists at the given path
 * @param {string} filePath - Full file path
 * @returns {boolean} True if file exists
 */
export function fileExists(filePath) {
  return fs.existsSync(filePath);
}

/**
 * Read file contents as text
 * @param {string} filePath - Full file path
 * @returns {string} File contents
 */
export function readFileContent(filePath) {
  if (!fileExists(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Write content to a file
 * @param {string} filePath - Full file path
 * @param {string} content - Content to write
 */
export function writeFileContent(filePath, content) {
  const directory = path.dirname(filePath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
  fs.writeFileSync(filePath, content, 'utf-8');
}

/**
 * Delete a file
 * @param {string} filePath - Full file path
 */
export function deleteFile(filePath) {
  if (fileExists(filePath)) {
    fs.unlinkSync(filePath);
  }
}

/**
 * Get list of files in a directory
 * @param {string} dirPath - Directory path
 * @returns {string[]} Array of file names
 */
export function getFilesInDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    throw new Error(`Directory not found: ${dirPath}`);
  }
  return fs.readdirSync(dirPath);
}

/**
 * Verify that a downloaded file exists in the downloads folder
 * @param {string} fileName - Name of the downloaded file
 * @param {string} downloadsPath - Path to downloads folder (default: './downloads')
 * @param {number} timeoutMs - Timeout to wait for file (default: 5000ms)
 * @returns {Promise<boolean>} True if file exists
 */
export async function verifyDownloadedFileExists(fileName, downloadsPath = './downloads', timeoutMs = 5000) {
  const filePath = path.join(downloadsPath, fileName);
  const startTime = Date.now();

  while (Date.now() - startTime < timeoutMs) {
    if (fileExists(filePath)) {
      return true;
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  throw new Error(`Downloaded file "${fileName}" not found within ${timeoutMs}ms`);
}

/**
 * Get file size in bytes
 * @param {string} filePath - Full file path
 * @returns {number} File size in bytes
 */
export function getFileSize(filePath) {
  if (!fileExists(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  return fs.statSync(filePath).size;
}

/**
 * Clear all files from a directory
 * @param {string} dirPath - Directory path
 */
export function clearDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(file => {
      const filePath = path.join(dirPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        clearDirectory(filePath);
        fs.rmdirSync(filePath);
      } else {
        fs.unlinkSync(filePath);
      }
    });
  }
}

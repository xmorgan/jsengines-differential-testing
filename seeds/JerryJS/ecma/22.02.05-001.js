/* Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if(!(Int8Array.BYTES_PER_ELEMENT === 1)) throw new Error("Test failed");
if(!(Uint8Array.BYTES_PER_ELEMENT === 1)) throw new Error("Test failed");
if(!(Uint8ClampedArray.BYTES_PER_ELEMENT === 1)) throw new Error("Test failed");
if(!(Int16Array.BYTES_PER_ELEMENT === 2)) throw new Error("Test failed");
if(!(Uint16Array.BYTES_PER_ELEMENT === 2)) throw new Error("Test failed");
if(!(Int32Array.BYTES_PER_ELEMENT === 4)) throw new Error("Test failed");
if(!(Uint32Array.BYTES_PER_ELEMENT === 4)) throw new Error("Test failed");
if(!(Float32Array.BYTES_PER_ELEMENT === 4)) throw new Error("Test failed");
if(!(Float64Array.BYTES_PER_ELEMENT === 8)) throw new Error("Test failed");

